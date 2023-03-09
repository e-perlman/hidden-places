class RelationshipsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        relationship=Relationship.create!(follower_id: session[:user_id], followee_id: relationship_params[:followee_id])
        render json: relationship, status: :created
    end

    private

    def relationship_params
        params.permit(:followee_id)
    end

    # def find_current_user
    #     User.find_by(id:[session[:user_id]])
    # end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {errors:["Relationship not found."]}, status: :not_found
    end
end
