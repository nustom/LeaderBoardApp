module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      if request.params["token"] != "offline_only_token"
        reject_unauthorized_connection
      end
    end
  end
end
