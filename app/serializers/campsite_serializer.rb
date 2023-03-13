class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :access_type, :land_type, :safety, :quietness, :privacy, :scenery, :accessibility, :state_id

  belongs_to :user
end
