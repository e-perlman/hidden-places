class UsersController < ApplicationController
    def create
        user=User.create(user_params)
        if user.valid?
            session[:user_id]=user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user=User.find_by(id:session[:user_id])
        if user
            render json: user, serializer: CurrentUserSerializer, status: :created
            # include: ['followers','followees','campsites'],
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def not_following
        user=User.find_by(id:session[:user_id])
        if user
            users=User.all
            following=user.followees
            not_following= users-following-[user]
            render json: not_following, status: :created
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :first_name, :last_name, :profile_pic, :bio, :password, :password_confirmation)
    end

end
