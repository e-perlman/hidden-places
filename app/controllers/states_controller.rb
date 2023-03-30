class StatesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        states=State.all
        render json: states, status: :ok
    end

    def create
        state=State.create!(state_params)
        render json: state, status: :created
    end

    private

    def state_params
        params.permit(:name, :climate, :known_for, :state_pic)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
