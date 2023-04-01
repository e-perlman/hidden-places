class State < ApplicationRecord
    has_many :campsites
    has_many :users, through: :campsites

    validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "Only allows letters" }

    validates :climate, presence: true

    validates :known_for, presence: true

    validates :state_pic, presence: true

end
