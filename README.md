# README

## Purpose
This project is a demo of live-reload dashboard. This will receive data from a mock data script, store it on Redis database server and publish data to clients via Active Cable library

## Environment
- Ruby 2.7
- Rails 6.0.2
- Redis

## Setup Guide
- Clone or download project<br/>
In the root project folder<br/>
- Run `bundle install`
- Run `rails s`
- Download mock live leaderboard data script [here](https://github.com/stevebutterworth/Leaderboard-Data-Simulator)
- Run `ruby mock_leaderboard_data.rb`
- Open `offline/leaderboard.html` in Chrome to see result




