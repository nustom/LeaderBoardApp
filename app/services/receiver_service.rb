class ReceiverService < BaseService
  # Store leaderboard 
  def save leaderboard_params
    $redis.set "leaderboard", leaderboard_params.to_json
    publish
  end

  # Publish leaderboard data to client
  def publish
    leaderboard_params = $redis.get "leaderboard"
    ActionCable.server.broadcast("leaderboard_channel", leaderboard_params)
  end
end