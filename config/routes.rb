Rails3MongoidDevise::Application.routes.draw do
  resources :links

  authenticated :user do
    root :to => 'links#new'
  end
  root :to => "home#index"
  devise_for :users
  resources :users, :only => [:show, :index]
  resources :links, :only => [:show, :index]

end
