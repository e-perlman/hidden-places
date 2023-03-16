class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :access_type, :land_type, :safety, :quietness, :privacy, :scenery, :accessibility, :created_at, :state_id

  belongs_to :state
end