FROM oven/bun:1.0 AS build
COPY . .

# Husky needs git to work
RUN apt-get update && apt-get install -y git
RUN bun i
RUN bun run build

FROM httpd:2.4 AS runtime
COPY --from=build /home/bun/app/dist /usr/local/apache2/htdocs/
EXPOSE 80