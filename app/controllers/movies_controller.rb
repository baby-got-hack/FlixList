class MoviesController < ApplicationController

    def index
         movie = Movie.all
         render json: movie
    end

end
