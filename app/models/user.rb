class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         has_many :favorites
         has_many :movies, through: :favorites
end
