from selenium import webdriver
from selenium.webdriver.common.by import By
import requests

# 프로필 이미지를 다운로드 할 인스타그램 사용자 아이디 입력
insta = input("Instagram handle (insta): ")
url = "https://www.instagram.com/" + insta

# 크롬 웹드라이버 구동 및 기본설정
driver = webdriver.Chrome()
driver.implicitly_wait(10)
driver.get(url)

# 프로필 이미지 객체 찾기 및 이미지 소스 추출
image_element = driver.find_element(By.CLASS_NAME, "xpdipgo.x972fbf.xcfux6l.x1qhh985.xm0m39n.xk390pu.x5yr21d.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xl1xv1r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x11njtxf.xh8yej3")
image_url = image_element.get_attribute('src')

# 서버로 프로필 이미지 URL과 인스타 아이디 보내기
api_url = "https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/profile/img"  # 서버 API 엔드포인트 URL
data = {
    "insta": insta,
    "img": image_url
}

response = requests.post(api_url, json=data)  # 올바르게 'data' 객체를 json으로 전송

if response.status_code == 200:
    print("프로필 이미지가 서버에 성공적으로 전송되었습니다.")
    print(image_url)
    print(response)
else:
    print(f"서버 전송 실패: {response.status_code}, {response.text}")

# 드라이버 종료
driver.quit()
