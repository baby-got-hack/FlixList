Rails.application.routes.draw do
  resources :movies
  devise_for :users
  resources :favorites do
    collection do
    get 'movie_data'
    end
  end
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get '/movies', to: 'movies#index'
end
