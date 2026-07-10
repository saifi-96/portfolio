import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';
import { FiExternalLink, FiGitPullRequest } from 'react-icons/fi';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const mockRepos: Repo[] = [
  {
    name: 'vpn-openvpn-client',
    description: 'A native Android OpenVPN wrapper utilizing Kotlin, custom network socket connections, and material configurations.',
    html_url: 'https://github.com/saifi-96/vpn-openvpn-client',
    stargazers_count: 32,
    forks_count: 14,
    language: 'Kotlin'
  },
  {
    name: 'compose-mvi-architecture',
    description: 'Boilerplate project showcasing MVI architecture with Jetpack Compose, Coroutines Flow, and Clean Core separation.',
    html_url: 'https://github.com/saifi-96/compose-mvi-architecture',
    stargazers_count: 54,
    forks_count: 22,
    language: 'Kotlin'
  },
  {
    name: 'fitstreak-fitness-tracker',
    description: 'Cross-platform mobile client built with Flutter, Provider state management, and Firebase caching integration.',
    html_url: 'https://github.com/saifi-96/fitstreak-fitness-tracker',
    stargazers_count: 18,
    forks_count: 8,
    language: 'Dart'
  },
  {
    name: 'android-room-sync',
    description: 'Room SQLite database sync utility utilizing WorkManager to synchronize offline inputs to cloud nodes.',
    html_url: 'https://github.com/saifi-96/android-room-sync',
    stargazers_count: 27,
    forks_count: 11,
    language: 'Java'
  }
];

export const GitHubStats: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch User profile & repositories
        const reposRes = await fetch('https://api.github.com/users/saifi-96/repos?sort=updated&per_page=4');
        const profileRes = await fetch('https://api.github.com/users/saifi-96');

        if (reposRes.ok && profileRes.ok) {
          const reposData = await reposRes.json();
          const profileData = await profileRes.json();
          
          setRepos(reposData.map((r: any) => ({
            name: r.name,
            description: r.description || 'No description provided.',
            html_url: r.html_url,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            language: r.language || 'Code'
          })));
          
          setProfile({
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            created_at: profileData.created_at
          });
        } else {
          throw new Error('API Rate Limited / Not Found');
        }
      } catch (err) {
        // Graceful fallback to mock data on rate limit or offline
        setRepos(mockRepos);
        setProfile({
          public_repos: 42,
          followers: 128,
          following: 84,
          created_at: '2016-03-12T00:00:00Z'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Generate simulated contribution data (53 weeks * 7 days)
  const generateContributions = () => {
    const cols = 40; // Reduced for screen real estate scaling
    const rows = 7;
    const grid: number[][] = [];
    for (let r = 0; r < rows; r++) {
      grid.push(Array.from({ length: cols }, () => Math.floor(Math.random() * 5)));
    }
    return grid;
  };

  const contributionsGrid = generateContributions();

  return (
    <section
      id="github-integration"
      className="relative py-24 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple dark:text-accent-purple light:text-accent-blue mb-3"
          >
            Open Source
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark-text dark:text-dark-text light:text-light-text tracking-tight"
          >
            GitHub <span className="text-gradient">Activity & Stats</span>
          </motion.h3>
        </div>

        {/* Stats Blocks */}
        {profile && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="glass-card p-5 rounded-2xl text-center">
              <h5 className="text-2xl sm:text-3xl font-extrabold text-accent-purple mb-1">
                {profile.public_repos}
              </h5>
              <p className="text-xs font-semibold text-dark-muted dark:text-dark-muted light:text-light-muted uppercase tracking-wider">
                Public Repos
              </p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h5 className="text-2xl sm:text-3xl font-extrabold text-accent-blue mb-1">
                {profile.followers}
              </h5>
              <p className="text-xs font-semibold text-dark-muted dark:text-dark-muted light:text-light-muted uppercase tracking-wider">
                Followers
              </p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h5 className="text-2xl sm:text-3xl font-extrabold text-accent-cyan mb-1">
                {profile.following}
              </h5>
              <p className="text-xs font-semibold text-dark-muted dark:text-dark-muted light:text-light-muted uppercase tracking-wider">
                Following
              </p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h5 className="text-2xl sm:text-3xl font-extrabold text-accent-pink mb-1">
                {new Date(profile.created_at).getFullYear()}
              </h5>
              <p className="text-xs font-semibold text-dark-muted dark:text-dark-muted light:text-light-muted uppercase tracking-wider">
                Joined GitHub
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Contribution Heatmap Mockup */}
          <div className="lg:col-span-6 w-full glass-card p-6 sm:p-8 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border">
            <h4 className="text-sm font-bold text-dark-text dark:text-dark-text light:text-light-text mb-4 uppercase tracking-wider flex items-center gap-2">
              <FiGitPullRequest className="text-accent-purple" /> Contribution Grid
            </h4>
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col gap-[3px] min-w-[500px]">
                {contributionsGrid.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-[3px]">
                    {row.map((level, colIdx) => {
                      // Custom color themes based on simulated levels
                      const colors = [
                        'bg-white/5 dark:bg-white/5 light:bg-black/5 border-dark-border/10', // 0
                        'bg-accent-purple/20', // 1
                        'bg-accent-purple/40', // 2
                        'bg-accent-purple/70', // 3
                        'bg-accent-purple' // 4
                      ];
                      return (
                        <div
                          key={colIdx}
                          className={`w-3.5 h-3.5 rounded-[2px] transition-colors duration-300 hover:scale-110 cursor-pointer ${
                            level === 0 ? 'border border-dark-border/25 dark:border-dark-border/25 light:border-light-border/25' : ''
                          } dark:block hidden ${colors[level]}`}
                        />
                      );
                    })}
                    {row.map((level, colIdx) => {
                      const lightColors = [
                        'bg-black/5 border-light-border',
                        'bg-accent-blue/20',
                        'bg-accent-blue/40',
                        'bg-accent-blue/70',
                        'bg-accent-blue'
                      ];
                      return (
                        <div
                          key={colIdx}
                          className={`w-3.5 h-3.5 rounded-[2px] transition-colors duration-300 hover:scale-110 cursor-pointer ${
                            level === 0 ? 'border border-light-border' : ''
                          } dark:hidden block ${lightColors[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-dark-muted dark:text-dark-muted light:text-light-muted mt-3">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-[2px] bg-white/5 dark:bg-white/5 light:bg-black/5 border border-dark-border/30" />
                <span className="w-3 h-3 rounded-[2px] bg-accent-purple/20 dark:bg-accent-purple/20 light:bg-accent-blue/20" />
                <span className="w-3 h-3 rounded-[2px] bg-accent-purple/40 dark:bg-accent-purple/40 light:bg-accent-blue/40" />
                <span className="w-3 h-3 rounded-[2px] bg-accent-purple/70 dark:bg-accent-purple/70 light:bg-accent-blue/70" />
                <span className="w-3 h-3 rounded-[2px] bg-accent-purple dark:bg-accent-purple light:bg-accent-blue" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Repositories Listings */}
          <div className="lg:col-span-6 w-full space-y-4">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl animate-pulse h-[110px]" />
              ))
            ) : (
              repos.map((repo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card p-6 rounded-3xl border-dark-border dark:border-dark-border light:border-light-border hover:border-accent-purple/30 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-sm sm:text-base text-dark-text dark:text-dark-text light:text-light-text flex items-center gap-2">
                      <FaBook className="text-accent-blue w-3.5 h-3.5" />
                      {repo.name}
                    </h5>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent-purple transition-colors duration-300"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted line-clamp-2 mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-purple" />
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaStar className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch className="w-3.5 h-3.5" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
