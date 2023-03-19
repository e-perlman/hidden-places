class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :access_type, :land_type, :safety, :quietness, :privacy, :scenery, :accessibility, :created_at, :state_id, :user_id

  belongs_to :user
  belongs_to :state
end
