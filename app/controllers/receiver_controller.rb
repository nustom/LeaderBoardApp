class ReceiverController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :verify_token

  # GET /receiver/leaderboard/:token
  # GET /receiver/leaderboard/:token.json
  # Parameters:
  #  - token: Query parameter (string)
  #  - leaderboard: Body parameter (object)
  def leaderboard
    render json: {success: true}
  end  
private
  def verify_token
    if !(params[:token].present? && params[:token] == "FT7E3Y68UPA6")
      render json: {success: false}
    end
  end  
end
