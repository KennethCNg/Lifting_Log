class LogsController < ApplicationController
    
    def index
        @logs = Log.all
        render :index
      end
  
      def create
        @log = Log.new(log_params)
        @log.author_id = current_user.id
        if @log.save
          render :show
        else
          render json: @log.errors.full_messages, status: 422
        end
      end
  
      def destroy
        @log = Log.find(params[:id])
         if @log.destroy
           render :show
         else
           render json: @log.errors.full_messages, status: 422
         end
      end
  
      def log_params
        params.require(:log).permit(:weight, :carb, :fat, :protein)
      end
end
