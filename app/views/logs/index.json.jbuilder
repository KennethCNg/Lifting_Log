@logs.each do |llog|
    json.set! log.id do
      json.extract! log, :weight, :carb, :fat, :protein, :author_id
    end
  end