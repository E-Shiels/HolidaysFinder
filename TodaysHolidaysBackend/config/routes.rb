Rails.application.routes.draw do

  resources :emails
  namespace :api do

    namespace :v1 do

      resources :holidays, only: [:index, :update]

    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
