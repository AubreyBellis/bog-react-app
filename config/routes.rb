Rails.application.routes.draw do
  namespace :api do
    resources :creatures
    end
  end
