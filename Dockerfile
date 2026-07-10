# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Define build arguments
ARG VITE_WEB3FORMS_ACCESS_KEY

# Set environment variables for build time
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY
ENV VITE_BASE_URL=/

# Copy package descriptors first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy codebase
COPY . .

# Build production static bundle
RUN npm run build

# Stage 2: Serve the application with Nginx web server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
