class Medium < ApplicationRecord
    has_many :Favorites
    has_many :Users :through => :Favorites
end
