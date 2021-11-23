class MoviesController < ApplicationController

    def index
         movies = Movie.where(genre: params[:genre]).order(:title)
         render json: movies
    end

end
