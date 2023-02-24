class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { in: 4..15 }

    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

    validates :bio, length: { maximum: 1000,
    too_long: "%{count} characters is the maximum allowed" }, allow_blank: true

end
