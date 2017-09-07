class Api::CreaturesController < ApplicationController
    def index
        @creatures = Creature.all
        render json: @creatures
      end

  def show
    @creature = Creature.find(params[:id])
    render json: {
      creature: @creature
    }
  end
  def create
    @creature = Creature.new creature_params

    if @creature.save
      render json: @creature
    else
      render json: {
        message: 'Error when creating creatures'
      }
    end
end
