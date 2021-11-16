class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         has_many :Favorites
         has_many :Media, :through => :Favorites
end
