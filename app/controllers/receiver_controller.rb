class ReceiverController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :verify_token
  before_action :init_service
  # POST /receiver/leaderboard/:token
  # Parameters:
  #  - token: Query parameter (string)
  #  - leaderboard: Body parameter (object)
  def leaderboard
    result = service.save(params.permit!.to_h[:leaderboard])
    render json: {success: true}
  end  
private
  def verify_token
    if !(params[:token].present? && params[:token] == LEADERBOARD_TOKEN)
      render json: {success: false}
    end
  end  

  def init_service
    @service ||= ReceiverService.new
  end

  def service
    init_service
  end
end
