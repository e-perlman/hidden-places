class Campsite < ApplicationRecord
    belongs_to :user
    belongs_to :state

    validates :name, presence: true
    
    validates :latitude, presence: true, numericality: { greater_than_or_equal_to:  -90, less_than_or_equal_to:  90 }

    validates :longitude, presence: true, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
    
    validates :access_type, presence: true, inclusion: {in: %w(Drive_In Hike_In Boat_In), message: "%{value} is not a valid access type."}
    validates :land_type, presence: true, inclusion: {in: %w(Private Public BLM), message: "%{value} is not a valid land type."}
    validates :safety, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :quietness, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :privacy, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :scenery, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :accessibility, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }

end
