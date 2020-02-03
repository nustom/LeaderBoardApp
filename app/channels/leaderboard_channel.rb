class LeaderboardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "leaderboard_channel"
  end
end