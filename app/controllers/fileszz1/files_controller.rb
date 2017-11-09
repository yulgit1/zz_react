require 'json'
class Fileszz1::FilesController < Fileszz1::BaseController
  #use this method to run operations and return json
  def index
  end

  def loadfiles
    files = Array.new
    Dir.chdir(ENV["thumbs"])
    Dir.glob('**/*.jpg').each_with_index { |t,index|
      files.push({:id => "id"+(index+1).to_s, :path => File.realpath(t), :name => File.basename(t)})
    }
    json = { :files => files}.to_json
    #respond_with json: json
    render :json => json
  end
end
