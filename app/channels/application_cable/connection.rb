module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      if request.params["token"] != WEBSOCKET_TOKEN
        reject_unauthorized_connection
      end
    end
  end
end
