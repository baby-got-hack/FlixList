class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all, Movie.all
        render json: favorites
    end

    def create
        favorite_data = params['favorite']
        favorite = Favorite.create(movie_id: favorite_data[:movie_id], user_id: favorite_data[:user_id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        render json: favorite
    end
end
