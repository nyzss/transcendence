#!/bin/bash

trap 'docker compose stop && exit' SIGINT

if [ "$1" == "build" ]; then
	build_flag="--build"
else
	build_flag=""
fi

# docker compose up postgres -d $build_flag

#docker compose exec django python manage.py makemigrations
#docker compose exec django python manage.py migrate

#docker compose exec django python manage.py migrate game zero

docker compose up $build_flag

# docker compose logs --follow