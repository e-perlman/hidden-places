class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio, :not_following
  has_many :followers
  has_many :followees
  has_many :campsites

  

#   def not_following
#     @following = object.followees
#     # @users = User.all
#     # @not_following = @users - @following-[object]
# end
# def feed
#   # followee_ids=object.followees.map{|followee| followee.id}
#   # campsites=Campsite.includes(:user).filter{|campsite| followee_ids.include?(campsite.user_id)}
#   campsites=Campsite.includes(:user)
# end
end
