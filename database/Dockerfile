# Derived from official mysql image (our base image)
FROM mysql
# Add a database
ENV MYSQL_DATABASE beers
# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
EXPOSE 3306
COPY ./scripts/ /docker-entrypoint-initdb.d/