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
      message: 'Error when creating new creatureee'
    }
  end
end

def update
  @creature = Creature.find params[:id]

  if @creature.update(creature_params)
    render json: @creature
  else
    render json: {
      message: 'Error when updating creature'
    }
  end
end

def destroy
  @creature = Creature.find(params[:id])
  @creature.destroy

  render json: {
    message: 'Creature successfully destroyed'
  }
  end
    private
    
      def creature_params
        params.require(:creature).permit(:name, :photo_url, :description)
        end
    end

