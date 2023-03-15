class StatesController < ApplicationController

    def index
        states=State.all
        render json: states, status: :ok
    end
end
