Rails.application.routes.draw do
  
 
  resources :campsites, only: [:create, :update, :destroy]
  
  resources :states, only: [:index, :create]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/not_following", to: "users#not_following"

  get "/mapskey", to: "users#key"
  
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/feed", to: "campsites#feed"
  get "/mysites/:user_id", to: "campsites#my_sites"

  resources :relationships, only:[:create, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end