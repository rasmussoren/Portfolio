# Use Node.js to build frontend
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Use lightweight Nginx to serve the React app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
