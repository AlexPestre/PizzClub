# Build a lean image to serve the static site with nginx
FROM nginx:1.27-alpine AS final

WORKDIR /usr/share/nginx/html

# Remove default nginx assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static site content
COPY index.html .
COPY _redirects .
COPY assets ./assets
COPY parse-init.js pizza-icon.svg ./

EXPOSE 80
