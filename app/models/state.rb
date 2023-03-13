class State < ApplicationRecord
    has_many :campsites
    has_many :users, through: :campsites

    validates :name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "Only allows letters" }


end
