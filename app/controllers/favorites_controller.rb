class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def create
        favorite = Favorite.create(movie_id: params[:movie_id], user_id: params[:user_id])
        render json: favorite
    end
end
