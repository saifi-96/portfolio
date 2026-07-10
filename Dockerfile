# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package descriptors first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy codebase
COPY . .

# Set Vite base path to root '/' for Docker environment serving
ENV VITE_BASE_URL=/

# Build production static bundle
RUN npm run build

# Stage 2: Serve the application with Nginx web server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
