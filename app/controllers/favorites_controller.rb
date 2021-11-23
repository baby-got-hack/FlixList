class FavoritesController < ApplicationController
    def create
        favorite = Favorite.create(user_id: params[:user_id], movie_id: params[:movie_id])
        render json: favorite
    end
end
