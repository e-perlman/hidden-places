class CampsitesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def feed
        user=find_user
        followee_ids=user.followees.map{|followee| followee.id}
        campsites=Campsite.includes(:user).filter{|campsite| followee_ids.include?(campsite.user_id)}
        render json: campsites, status: :ok
    end

    def my_sites
        user=User.find(params[:user_id])
        campsites=user.campsites
        render json: campsites, status: :ok
    end
    
    def create
        user=find_user
        campsite=user.campsites.create!(campsite_params)
        render json: campsite, status: :created
    end

    def update
        campsite=find_campsite
        campsite.update!(campsite_params)
        render json: campsite, status: :created
    end

    def destroy
        campstie=find_campsite
        campstie.destroy
        head :no_content
    end


    private

    def find_user
        User.find(session[:user_id])
    end

    def find_campsite
        user=User.find(session[:user_id])
        user.campsites.find(params[:id])
    end

    def campsite_params
        params.permit(:name, :state_id, :latitude, :longitude, :access_type, :land_type, :safety, :quietness, :privacy, :scenery, :accessibility)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {errors:["Campsite not found."]}, status: :not_found
    end
end

