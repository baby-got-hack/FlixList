class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def create
        favorite_data = params['favorite']
        favorite = Favorite.create(movie_id: favorite_data[:movie_id], user_id: favorite_data[:user_id])
        render json: favorite
    end
end
