class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :edit, :update, :destroy]
  
  def index
  	@messages = Message.all
  end

  def new
 	@message = Message.new
  end

  def create
  	@message = Message.new(message_params)
    if @message.save
      redirect_to root_path, notice: 'Message was successfully created.'
    else
      flash.now[:error] = "#{@message.errors.full_messages.to_sentence}"
      render action: 'new'
    end
    
  end

  private

  def set_message # 'class method'
      @message = Message.find(params[:id])
    end

  def message_params
      params.require(:message).permit(:content, :user_id)
    end
end
