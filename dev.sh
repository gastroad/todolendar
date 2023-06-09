server1_pid=""
server2_pid=""
cleanup() {
    echo "스크립트를 종료합니다."

    if [[ -n $server1_pid ]]; then
        echo "todolendar-back 서버를 종료합니다."
        kill $server1_pid
    fi

    if [[ -n $server2_pid ]]; then
        echo "todolendar-front 서버를 종료합니다."
        kill $server2_pid
    fi

    exit
}

trap cleanup EXIT

echo "todolendar-dev server:"
options=("1. todolendar-dev 설치 및 실행" "2. todolendar-dev 실행" "나가기")

select opt in "${options[@]}"
do
    case $opt in
        "1. todolendar-dev 설치 및 실행")
            echo "todolendar-dev 설치 및 실행"

            cd todolendar-back
            npm install
            nodemon app.js &
            server1_pid=$!
            cd ..

            cd todolendar-front
            npm install
            npm run dev &
            server2_pid=$!
            open "http://localhost"
            start "" "http://localhost"
            break
            ;;
        "2. todolendar-dev 실행")
            echo "todolendar-dev 실행"

            cd todolendar-back
            nodemon app.js &
            server1_pid=$!
            cd ..

            cd todolendar-front
            npm run dev &
            server2_pid=$!
            open "http://localhost"
            start "" "http://localhost"
            break
            ;;
        "나가기")
            break
            ;;
        *) echo "잘못된 선택입니다. 1 또는 2를 입력하세요.";;
    esac
done

while true; do
    sleep 1
done
