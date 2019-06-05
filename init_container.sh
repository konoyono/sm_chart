#!/usr/bin/env bash

# rails api mode
docker-compose run --rm web rails new . --skip-bundle -T

# copy config
# cp -f config/myapp/database.yml myapp/config/database.yml
# cp -f config/myapp/application.rb myapp/config/application.rb 
# cp -f config/myapp/Gemfile myapp/Gemfile

# rspec-rails, factory_bot_rails
docker-compose run --rm web bundle install 

docker-compose build