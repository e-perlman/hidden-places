Rails.application.routes.draw do
  
 
  resources :campsites, only: [:create, :update, :destroy]
  get "/feed", to: "campsites#feed"
  resources :states, only: [:index, :create]
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    get "/me", to: "users#show"
    delete "/logout", to: "sessions#destroy"
    
    get "/mysites/:user_id", to: "campsites#my_sites"

    # get "/users", to: "users#index"
    resources :relationships, only:[:create, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end