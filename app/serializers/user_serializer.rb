class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio

  # def campsites
  #   self.object.campsites
  # end
end
