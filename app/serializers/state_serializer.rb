class StateSerializer < ActiveModel::Serializer
  attributes :id, :name, :climate, :known_for, :state_pic
end
